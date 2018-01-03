<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Utassetdata extends CI_Model {

function updateDT($dtrows)
            {
                $this->load->database();
                    $data = array(
                    'AssetNo' => $this->input->post('AssetNo'),
                    //'AssetNoRegDept' => $this->input->post('AssetNoRegDept'),
                    'AssetKey' => $this->input->post('AssetKey'),
                    'AssetSAPNo' => $this->input->post('AssetSAPNo'),
                    'AssetName' => $this->input->post('AssetName'),
                    'AssetGroup' => $this->input->post('AssetGroup'),
                    'AssetCategory' => $this->input->post('AssetCategory'),
                    'AssetLocation' => $this->input->post('AssetLocation'),
                    'AssetSublocation' => $this->input->post('AssetSublocation'),
                    //'AssetCostcenter' => $this->input->post('AssetCostcenter'),
                    'AssetPic' => $this->input->post('AssetPic'),
                    'AssetCondition' => $this->input->post('AssetCondition'),
                    'AssetRemark' => $this->input->post('AssetRemark'),
                    'AssetInfo' => $this->input->post('AssetInfo'),
                    'AssetAquisitiondate' => $this->input->post('AssetAquisitiondate'),
                    'AssetLabel' => $this->input->post('AssetLabel'),
                    'AssetCost' => $this->input->post('AssetCost')
                );
                $this->db->where('AssetID', $this->input->post('AssetID'));
                if ( !$this->db->update('masset', $data))
                {
                        $error = $this->db->error(); // Has keys 'code' and 'message'
                }else{
                    $error = array(
                        'success'=>true,
                        'message'=> $this->input->post('AssetName') . ' Updated Successfuly'
                    );
                }
                
                return json_encode($error);  
            }
    
}
