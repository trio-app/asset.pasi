<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetlocation extends MX_Controller {
    
    public function read(){
        $this->load->model('Rassetlocation');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetlocation->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetlocation');
        $hasil = $this->Cassetlocation->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetlocation');
        $hasil = $this->Uassetlocation->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetlocation');
        $hasil = $this->Dassetlocation->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
            
}
