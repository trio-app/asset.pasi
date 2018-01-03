<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class assetgroup extends MX_Controller {
    
    public function read(){
        $this->load->model('Rassetgroup');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetgroup->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetgroup');
        $hasil = $this->Cassetgroup->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetgroup');
        $hasil = $this->Uassetgroup->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetgroup');
        $hasil = $this->Dassetgroup->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
            
}
