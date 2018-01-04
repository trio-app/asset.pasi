<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_uploadfile extends CI_Model {

function insertdata($dt){
        //print_r($dt);
        $this->load->database();
        $field = array(
            'GroupName' => $dt[0],
            'GroupDescription' => $dt[1],
        );
        
        if ( ! $this->db->insert('mgroup', array_filter($field)))
        {   
            //echo $this->db->_error_message();
                return 1;
        }else{
                return 0;
        }

        
}

    
}
