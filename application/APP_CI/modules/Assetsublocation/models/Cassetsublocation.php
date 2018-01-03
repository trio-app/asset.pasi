<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cassetsublocation extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'LocName' => $this->input->post('LocName'),
                        'SubLocname' => $this->input->post('SubLocname'),
                        'SubDescription' => $this->input->post('SubDescription')
                );

                if ( ! $this->db->insert('msublocation', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('SubLocname') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
