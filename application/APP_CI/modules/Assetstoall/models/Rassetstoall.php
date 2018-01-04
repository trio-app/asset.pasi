<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Rassetstoall extends CI_Model {

function load_default($start,$limit,$filter){

    $this->load->database();
    $this->db->select(" SQL_CALC_FOUND_ROWS masset.assetno,
                            masset.AssetName,
                            masset.AssetLocation,
                            IFNULL(hasilopname.chlocation ,'') as AssetLocationNew,
                            masset.AssetCondition,
                            IFNULL(hasilopname.chcondition ,'') as AssetConditionNew,
                            IFNULL(hasilopname.AssetRemark ,'') as AssetRemark,
                            IFNULL(hasilopname.AssetScanUser,'') as AssetScanUser,
                            IFNULL(cpuser.userName,'') as AssetUsername,
                            IFNULL(hasilopname.ScanDate,'') as ScanDate,
                            masset.AssetPic,
                            IFNULL(hasilopname.SystemDate,'') as SystemDate,
                            masset.AssetInfo ",FALSE);
    $this->db->from('masset');
    $this->db->join("(SELECT
                        assetopname.AssetNo,
                        assetopname.AssetLocation AS chlocation,
                        assetopname.AssetCondition AS chcondition,
                        assetopname.AssetRemark,
                        assetopname.AssetScanUser,
                        DATE_FORMAT(assetopname.AssetScanDate,'%Y-%m-%d') as ScanDate,
                        DATE_FORMAT(assetopname.AssetDate,'%Y-%m-%d') as SystemDate

                        FROM
                        assetopname) as hasilopname", 'masset.AssetNO = hasilopname.AssetNo', 'LEFT');
    $this->db->join("cpuser","cpuser.user_nik = hasilopname.AssetScanUser",'LEFT');
    $this->db->where("masset.AssetInfo", "ASSET");
    $this->db->order_by("hasilopname.AssetScanUser","DESC");
    $query = $this->db->get();
                    //return $this->db->last_query();
    $rows = $query->result_array();


    $query2 = $this->db->query('SELECT FOUND_ROWS() AS hasil');
    $count = $query2->row('hasil');

    $data = array(
                'TotalRows' => $count,
                    'Rows' => $rows
                 );
    return json_encode($data);   

}
function cbolist(){
    $this->load->database();
    $this->db->select(' mcostcenter.*
                    ',FALSE);
    $this->db->from('mcostcenter');
    $this->db->where("mcostcenter.CostID <>", 0);
    $query = $this->db->get();
    $rows = $query->result_array();
    return json_encode($rows);   
    
}

    
}
