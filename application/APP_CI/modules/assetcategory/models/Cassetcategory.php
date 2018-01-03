<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cassetcategory extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'CategoryName' => $this->input->post('CategoryName'),
                        'CategoryDescription' => $this->input->post('CategoryDescription')
                );

                if ( ! $this->db->insert('mcategory', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('CategoryName') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
