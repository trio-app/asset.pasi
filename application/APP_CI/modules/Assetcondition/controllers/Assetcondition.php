<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetcondition extends MX_Controller {
    
    public function read(){
        $this->load->model('Rassetcondition');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetcondition->load_default($start,$limit,$filter));
        
    }  
}
