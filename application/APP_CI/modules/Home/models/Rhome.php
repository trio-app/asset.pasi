<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rhome extends CI_Model {

function menujs(){
        $this->load->database();
        $this->db->select('
                cpaccess.accGroup,
                cpmenudetail.menuID,
                cpmenudetail.menuParrent,
                cpmenudetail.menuControl,
                cpmenudetail.menuDisplay,
                cpmenudetail.menuLeaf,
                cpmenudetail.menuShort,
                cpmenu.menuShort,
                cpmenu.menuExpand
                ',FALSE);
        $this->db->from('cpaccess');
        $this->db->join('cpmenudetail', 'cpaccess.accMenu = cpmenudetail.menuID');
        $this->db->join('cpmenu', 'cpmenudetail.menuParrent = cpmenu.menuName');
        $this->db->group_by('cpmenudetail.menuParrent');
        $this->db->order_by('cpmenu.menuShort','ASC');
        $query = $this->db->get();
        $rows = $query->result_array();
        //echo $this->db->last_query();
        $parrent = array();
        $hasbol = false;
        foreach ($rows as $key => $value) {
            if($value["menuExpand"]=='true')
                    {
                    $hasbol =  true;

                }else{
                    $hasbol = false;
                    };
            $parrent[]= array(
                "text"=>$value["menuParrent"],
                'expanded'=>$hasbol,
                'children' => $this->menuchild($value["menuParrent"])
            );
        }
        return json_encode($parrent);    

    }
function menuchild($menuparrent){
        $this->load->database();
        $this->db->select(' 
                        cpaccess.accGroup,
                        cpmenudetail.menuID,
                        cpmenudetail.menuParrent,
                        cpmenudetail.menuControl,
                        cpmenudetail.menuDisplay,
                        cpmenudetail.menuLeaf,
                        cpmenudetail.menuShort
                        ',FALSE);
        $this->db->from('cpaccess');
        $this->db->join('cpmenudetail', 'cpaccess.accMenu = cpmenudetail.menuID');
        $this->db->order_by('cpmenudetail.menuShort','ASC');
        $this->db->where('cpmenudetail.menuParrent',$menuparrent);
        $query = $this->db->get();
        //echo $this->db->last_query();
        $rows = $query->result_array();
        
        $arrchild = array();
        foreach ($rows as $key => $value) {
                    $arrchild[]= array(
                        "text"=>$value["menuDisplay"],
                        'id' => $value["menuControl"],
                        'leaf' => $value["menuLeaf"]
                    );
                }
        return $arrchild; 
    }

}
