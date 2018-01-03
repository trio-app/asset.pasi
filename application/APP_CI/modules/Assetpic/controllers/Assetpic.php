<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetpic extends MX_Controller {
    public function read(){
        $this->load->model('Rassetpic');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetpic->load_default($start,$limit,$filter));   
    }
    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetpic');
        $hasil = $this->Cassetpic->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetpic');
        $hasil = $this->Uassetpic->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetpic');
        $hasil = $this->Dassetpic->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
}
