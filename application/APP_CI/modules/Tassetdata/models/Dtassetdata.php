<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dtassetdata extends CI_Model {

function deleteDT($dtrows)
            {
                $this->load->database();
                $this->db->where('AssetID', $this->input->post('AssetID'));
                
                if ( ! $this->db->delete('masset'))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('AssetName') . ' Deleted Successfuly'
                    );
                }
                
                return json_encode($error); 
            }
    
}
