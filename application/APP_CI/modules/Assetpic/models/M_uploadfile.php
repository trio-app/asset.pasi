<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_uploadfile extends CI_Model {

function insertdata($dt){
        //print_r($dt);
        $this->load->database();
        $field = array(
            'PicName' => $dt[0],
            'PicDescription' => $dt[1],
        );
        
        if ( ! $this->db->insert('mpic', array_filter($field)))
        {   
            //echo $this->db->_error_message();
                return 1;
        }else{
                return 0;
        }

        
}

    
}
