<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rlogin extends CI_Model {

function signin($start){
               
                $keywhere = array(
                    'userLogin'=> $start['userLogin'] ,
                    'userPassword'=>md5($start['userPassword'])
                );
                $this->load->database();
                $this->db->select(' *
				',FALSE);
                $this->db->from('cpuser');
                $this->db->where($keywhere);
                $query = $this->db->get();
                $rows = $query->result_array();
                
                return $rows;   
                
}
function Log_userlogin($userlogin){
    $this->load->database();
    $data = array(
            'sysStatus' =>1 // hanya proses  untuk mengupdate tanggal Login saja
    );
    $this->db->where('userLogin',$userlogin);
    $this->db->update('cpuser', $data);
}
    
}
