<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rassetcategory extends CI_Model {
   
function load_default($start,$limit,$filter){
    $dtfilter = json_decode($filter,true);

    $this->load->database();
    $this->db->select(' SQL_CALC_FOUND_ROWS mcategory.*
                    ',FALSE);
    $this->db->from('mcategory');
    $this->db->where("mcategory.CategoryID<>", 0);
    $this->db->like('mcategory.CategoryName',$dtfilter[0]['value']);
    $this->db->or_like('mcategory.CategoryDescription',$dtfilter[0]['value']);
    $this->db->limit($limit,$start);
    $this->db->order_by("mcategory.CategoryID","DESC");
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
