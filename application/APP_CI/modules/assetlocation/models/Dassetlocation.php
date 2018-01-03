<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dassetlocation extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'LocName' => $this->input->post('LocName'),
                        'LocDescription' => $this->input->post('LocDescription')
                );
                $this->db->where('LocID', $this->input->post('LocID'));
                
                if ( ! $this->db->delete('mlocation', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('LocName'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
