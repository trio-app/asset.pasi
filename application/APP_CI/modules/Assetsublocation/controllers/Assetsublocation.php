<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetsublocation extends MX_Controller {
    public function read(){
        $this->load->model('Rassetsublocation');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetsublocation->load_default($start,$limit,$filter));   
    }
    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetsublocation');
        $hasil = $this->Cassetsublocation->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetsublocation');
        $hasil = $this->Uassetsublocation->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetsublocation');
        $hasil = $this->Dassetsublocation->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
}
