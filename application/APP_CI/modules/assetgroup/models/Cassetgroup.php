<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cassetgroup extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'GroupName' => $this->input->post('GroupName'),
                        'GroupDescription' => $this->input->post('GroupDescription')
                );

                if ( ! $this->db->insert('mgroup', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('GroupName') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
