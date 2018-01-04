<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Stobylocation extends MX_Controller {
    
    public function read(){
        $this->load->model('Rstobylocation');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rstobylocation->load_default($start,$limit,$filter));
        
    }
            
}
