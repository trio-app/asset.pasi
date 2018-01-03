<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rassetpic extends CI_Model {
   
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);

    $this->load->database();
    $this->db->select(' SQL_CALC_FOUND_ROWS mpic.*
                    ',FALSE);
    $this->db->from('mpic');
    $this->db->where("mpic.PicID<>", 0);
    $this->db->like('mpic.PicName',$dtfilter[0]['value']);
    $this->db->or_like('mpic.PicDescription',$dtfilter[0]['value']);
    $this->db->limit($limit,$start);
    $this->db->order_by("mpic.PicID","DESC");
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
