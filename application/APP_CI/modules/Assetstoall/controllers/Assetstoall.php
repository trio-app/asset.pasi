<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetstoall extends MX_Controller {
    public function read(){
        $this->load->model('Rassetstoall');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = array();
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetstoall->load_default($start,$limit,$filter));
        
    }

}
