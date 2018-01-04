<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Stobygroup extends MX_Controller {
    
    public function read(){
        $this->load->model('Rstobygroup');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rstobygroup->load_default($start,$limit,$filter));
        
    }
            
}
