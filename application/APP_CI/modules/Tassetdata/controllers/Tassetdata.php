<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tassetdata extends MX_Controller {
    
    public function read(){
        $this->load->model('Rtassetdata');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rtassetdata->load_default($start,$limit,$filter));   
    }    
    
    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Ctassetdata');
        $hasil = $this->Ctassetdata->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Utassetdata');
        $hasil = $this->Utassetdata->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dtassetdata');
        $hasil = $this->Dtassetdata->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    
}
