<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dassetgroup extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'GroupName' => $this->input->post('GroupName'),
                        'GroupDescription' => $this->input->post('GroupDescription')
                );
                $this->db->where('GroupID', $this->input->post('GroupID'));
                
                if ( ! $this->db->delete('mgroup', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('GroupName'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
