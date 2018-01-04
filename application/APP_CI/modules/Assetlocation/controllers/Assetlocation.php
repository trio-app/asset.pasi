<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Assetlocation extends MX_Controller {
    
    public function read(){
        $this->load->model('Rassetlocation');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->Rassetlocation->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('Cassetlocation');
        $hasil = $this->Cassetlocation->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Uassetlocation');
        $hasil = $this->Uassetlocation->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('Dassetlocation');
        $hasil = $this->Dassetlocation->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    
    function uploadfile(){
        $this->load->library('PHPExcel');
        $this->load->model('M_uploadfile');
        if (!isset($_FILES['fileexcel'])){
            echo '{"success": true, "msg": "File Tidak Sesuai"}';
        }else{
            $filename = $_FILES['fileexcel']['name'];
            $file   = explode('.',$_FILES['fileexcel']['name']);
            $length = count($file);
            if($file[$length -1] == 'xlsx' || $file[$length -1] == 'xls'){//jagain barangkali uploadnya selain file excel
            $tmp    = $_FILES['fileexcel']['tmp_name'];//Baca dari tmp folder jadi file ga perlu jadi sampah di server :-p
            //$this->load->library('excel');//Load library excelnya
            $read   = PHPExcel_IOFactory::createReaderForFile($tmp);
            $read->setReadDataOnly(true);
            $excel  = $read->load($tmp);
            $sheets = $read->listWorksheetNames($tmp);//baca semua sheet yang ada

                    $_sheet = $excel->setActiveSheetIndexByName($sheets[0]);//Kunci sheetnye biar kagak lepas :-p
                    $maxRow = $_sheet->getHighestRow();
                    $maxCol = $_sheet->getHighestColumn();
                    $field  = array();
                    $sql    = array();
                    $hasil=array();
                    $totalrows = 0;
                    $maxCol = range('A',$maxCol);
                    $mulai=2;

                        $valIN=0;
                        $valOUT=0;
                        for($i = 2; $i <= $maxRow; $i++){
                           foreach($maxCol as $key => $coloumn){
                            $field[$key]    = $_sheet->getCell($coloumn.$i)->getCalculatedValue();//Kolom pertama sebagai field list pada table

                           } 
                           
                           $val = $this->M_uploadfile->insertdata($field);

                           switch ($val) {
                               case 1:
                                    $valOUT++;
                                   break;

                               case 0:
                                   $valIN++;
                                   break;
                           }
                           
                            unset($field);
                            $field=array();
                            $totalrows++;

                        }

                        $this->output
                        ->set_content_type('text/html')
                        ->set_output(json_encode(array(
                                        'success' => 'true',
                                        'msg' => ' Total Data : '. $totalrows .' <br/> Data Success : ' . $valIN . ' <br/> Data Faield : ' . $valOUT
                            
                                )));
                        

            }else{
                echo '{"success": false, "msg": "File Tidak Sesuai"}';
            }
        }
        
    }    
            
}
