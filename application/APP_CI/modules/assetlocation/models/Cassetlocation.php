<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cassetlocation extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'LocName' => $this->input->post('LocName'),
                        'LocDescription' => $this->input->post('LocDescription')
                );

                if ( ! $this->db->insert('mlocation', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('LocName') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
