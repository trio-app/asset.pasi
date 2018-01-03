<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller {
    public function __construct() {

    }
    public function index()
    {
        
        $this->load->view('Vlogin');
    }
     public function signin(){        
        $jsonData =  file_get_contents("php://input");        
        //print_r(json_decode($jsonData,true));
        $this->load->model('Rlogin');
        $data =  $this->Rlogin->signin(json_decode($jsonData,true));
        if(count($data)==1){
            $this->session->set_userdata('isLogin',TRUE); 
            $this->session->set_userdata($data[0]);
            echo 'success';   
        }else{
           echo 'failed';
        }
        
       
    }
}