<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rassetgroup extends CI_Model {
   
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);

    $this->load->database();
    $this->db->select(' SQL_CALC_FOUND_ROWS mgroup.*
                    ',FALSE);
    $this->db->from('mgroup');
    $this->db->where("mgroup.GroupID<>", 0);
    $this->db->like('mgroup.GroupName',$dtfilter[0]['value']);
    $this->db->or_like('mgroup.GroupDescription',$dtfilter[0]['value']);
    $this->db->limit($limit,$start);
    $this->db->order_by("mgroup.GroupID","DESC");
    $query = $this->db->get();
                    //return $db->last_query();
    $rows = $query->result_array();


    $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
    $count = $query2->row('hasil');

    $data = array(
                'TotalRows' => $count,
                    'Rows' => $rows
                 );
    return json_encode($data);   

}


}
