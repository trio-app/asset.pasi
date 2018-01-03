<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dassetsublocation extends CI_Model {

function deleteDT()
            {
                $this->load->database();
                $data = array(
                        'LocName' => $this->input->post('LocName'),
                        'SubLocname' => $this->input->post('SubLocname'),
                        'SubDescription' => $this->input->post('SubDescription')
                );
                $this->db->where('SublocID', $this->input->post('SublocID'));
                
                if ( ! $this->db->delete('msublocation', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('SubLocname'). ' Delete Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
