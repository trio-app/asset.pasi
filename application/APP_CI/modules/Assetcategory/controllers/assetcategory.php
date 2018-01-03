<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetcategory extends MX_Controller {
    
    public function read(){
        $this->load->model('Rassetcategory');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetcategory->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetcategory');
        $hasil = $this->Cassetcategory->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetcategory');
        $hasil = $this->Uassetcategory->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetcategory');
        $hasil = $this->Dassetcategory->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
            
}
