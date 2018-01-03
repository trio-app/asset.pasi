<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MX_Controller {
    public function __construct() {
        parent::__construct();
        if($this->session->userdata('isLogin')==false){
        //redirect('Login');    
        }
    }
    public function index()
    {
           
           $DATA['userLogin']=$this->session->userdata('userLogin');
           $DATA['userName']=$this->session->userdata('userName');
           $DATA['userGroup']=$this->session->userdata('userGroup');
           $this->load->view('vmainhome',$DATA);
    }
    public function logout(){
        $array_items = array('userLogin', 'userName','userGroup');
        $this->session->unset_userdata($array_items);
        $this->session->unset_userdata('isLogin');
        redirect('Login');    
    }
    public function title(){
        $this->load->view('vtitle');
    }
    public function checkdb(){
        $this->load->database();
        $query = $this->db->query("select * from m_group");
        header('Content-type: application/json');
        echo json_encode($query->result());
    }
    public function samplejson(){
        header('Content-type: application/json');        
        $this->load->model('Rhome');
        $data =  $this->Rhome->menujs();
        echo  $data;
    }
    public function mnumasterdata(){
        $this->load->view('vmasterdata');
    }
     public function mnutransaction(){
        $this->load->view('vmenutransaction');
    }
    public function jsmenuside(){
        $find =array("<script>","</script>");
        $replace = array("");
        
        $data = str_replace($find,$replace,$this->load->view('js_sidemenu','',true));

        echo $data;
    }
}
