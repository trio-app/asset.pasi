<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uassetcategory extends CI_Model {

function updateDT()
            {
                $this->load->database();
                $data = array(
                        'CategoryName' => $this->input->post('CategoryName'),
                        'CategoryDescription' => $this->input->post('CategoryDescription')
                );
                $this->db->where('CategoryID', $this->input->post('CategoryID'));
                
                if ( ! $this->db->update('mcategory', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('CategoryName'). ' Update Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
