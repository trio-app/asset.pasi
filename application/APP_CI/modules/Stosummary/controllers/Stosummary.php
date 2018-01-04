<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Stosummary extends MX_Controller {
    
    public function read(){
        $this->load->model('Rstosummary');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rstosummary->load_default($start,$limit,$filter));
        
    }
    
    public function summary(){
        $this->load->model('Rstosummary');
        print_r($this->Rstosummary->summary());
    }
            
}
