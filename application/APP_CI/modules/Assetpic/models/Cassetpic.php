<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cassetpic extends CI_Model {

function insertDT()
            {
                $this->load->database();
                $data = array(
                        'PicName' => $this->input->post('PicName'),
                        'PicDescription' => $this->input->post('PicDescription')
                );

                if ( ! $this->db->insert('mpic', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('PicName') . ' Insert Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
