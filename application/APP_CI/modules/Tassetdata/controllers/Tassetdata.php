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
}
