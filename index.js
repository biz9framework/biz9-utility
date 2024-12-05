/*
Copyright 2023 Certified CoderZ
Author: certifiedcoderz@gmail.com (Certified CoderZ)
License GNU General Public License v3.0
Description: BiZ9 Framework: Utility
*/
module.exports = function(data_config){

module.w = function(title,str){
    utilityz.w(title,str);
}
module.get_guid=function(){
    return utilityz.get_guid();
}
module.is_guid=function(str){
    return utilityz.is_guid(str);
}
module.get_title_url=function(title){
    return utilityz.get_title_url(title);
}
module.get_id=function(max){
    return utilityz.get_id(max);
}
module.get_query=function(window)
{
    return utilityz.get_query(window);
}
module.get_date_time_str=function(date,time) {
    return utilityz.get_date_time_str(date,time);
}
module.get_date_str=function(date) {
    return utilityz.get_date_str(date);
}
module.get_time_str=function(date) {
    return utilityz.get_time_str(date);
}
module.get_date_time_obj=function(date) {
    return utilityz.get_date_time_obj(date);
}
module.get_date_time_pretty=function(date) {
    return utilityz.get_date_time_pretty(date);
}
module.get_iso_str_by_date_time=function(date,time) {
    return utilityz.get_iso_str_by_date_time(date,time);
}
module.get_slug=function(str){
    return utilityz.get_slug(str);
}
module.get_money=function(n) {
    return utilityz.get_money(n);
}
module.get_money_obj=function(n) {
    return appz.get_money_obj(n);
}
module.get_visible_product_obj=function(n) {
    return appz.get_visible_product_obj(n);
}
module.get_visible_service_obj=function(n) {
    return appz.get_visible_service_obj(n);
}
module.get_visible_event_obj=function(n) {
    return appz.get_visible_event_obj(n);
}
module.remove_money=function(n) {
    return utilityz.remove_money(n);
}
module.get_currency = function(amount) {
    return utilityz.get_currency(amount);
}
module.get_cents = function(number) {
    return utilityz.get_cents(number);
}
module.get_contains=function(value,searchFor){
    return utilityz.get_contains(value,searchFor);
}
module.remove_html_str=function(str){
    return utilityz.remove_html_str(str);
}
module.get_month_title_short=function(d){
    return utilityz.get_month_title_short(d);
}
module.get_month_title=function(d){
    return utilityz.get_month_title(d);
}
module.get_ip_address=function(callback){
    utilityz.get_ip_address(function(error,data)
        {
            callback(error,data);
        });
}
module.text_truncate=function(str,length,ending){
    return utilityz.text_truncate(str,length,ending);
}
module.get_file_ext=function(_file_path){
    return utilityz.get_file_ext(_file_path);
}
module.set_file_upload=function(req,file_path,callback){
    utilityz.set_file_upload(req,file_path,function(data)
        {
            callback(data);
        });
}
module.set_resize_photo_file=function(new_size,file_path,org_filename,new_filename,callback){
    utilityz.set_resize_photo_file(new_size,file_path,org_filename,new_filename,function(error)
        {
            callback(error);
        });
}
module.set_resize_square_photo_file=function(org_file,sizes,callback){
    utilityz.set_resize_square_photo_file(org_file,sizes,function(error)
        {
            callback(error);
        });
}
module.get_file_buffer=function(file_path,filename,callback){
    utilityz.get_file_buffer(file_path,filename,function(error,data)
        {
            callback(error,data);
        });
}
module.set_photo_file=function(file_path,org_filename,new_filename,callback){
    utilityz.set_photo_file(file_path,org_filename,new_filename,function(error,data)
        {
            callback(error,data);
        });
}
module.get_mp3_duration=function(secs){
    return utilityz.get_mp3_duration(secs);
}
module.validate_email=function(email){
    return utilityz.validate_email(email);
}
module.get_paging_list=function(data_list,page_current,page_size,callback){
    utilityz.get_paging_list(data_list,page_current,page_size,function(new_data_list,item_count,page_count)
        {
            callback(new_data_list,item_count,page_count);
        });
}
return module;
}
