<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uassetpic extends CI_Model {

function updateDT()
            {
                $this->load->database();
                $data = array(
                        'PicName' => $this->input->post('PicName'),
                        'PicDescription' => $this->input->post('PicDescription')
                );
                $this->db->where('PicID', $this->input->post('PicID'));
                
                if ( ! $this->db->update('mpic', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=>$this->input->post('PicName'). ' Update Successfuly'
                    );
                }
                
                return json_encode($error);                 
                
            }
    
}
