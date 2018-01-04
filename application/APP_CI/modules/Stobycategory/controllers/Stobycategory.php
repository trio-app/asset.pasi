<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Stobycategory extends MX_Controller {
    
    public function read(){
        $this->load->model('Rstobycategory');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rstobycategory->load_default($start,$limit,$filter));
        
    }
            
}
