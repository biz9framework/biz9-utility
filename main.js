/* Copyright (C) 2016 9_OPZ #Certified CoderZ
 * GNU GENERAL PUBLIC LICENSE
 * Full LICENSE file ( gpl-3.0-licence.txt )
 * BiZ9 Framework
 * Utility-Main
 */
const path = require('path');
const get_guid = (data_type,tbl_id) => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const is_guid = (str) =>{
    let regex = new RegExp(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/);
    if (str == null) {
        return false;
    }
    if (regex.test(str) == true) {
        return true;
    }
    else {
        return false;
    }
}
const get_file_ext = (_file_path) =>{
    return path.extname(_file_path);
}
const get_title_url = (title) => {
    if(!title){
        title='';
    }
    return title.replace(/[^a-z0-9]+/i, "_").toLowerCase();
}
const get_id = (max) => {
    if(!max){
        max = 99999;
    }
    var r=Math.floor(Math.random()*max)+1;
    return r;
}
const get_query = (window) => {
    let vars = [],hash;
    let hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(let i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
const get_date_time_str = (date,time) => {
    //Tuesday, February 14th 2023,  at 2:39 am
    if(!time){
        return String(moment(date).format("dddd MMMM Do, YYYY"));
    }else{
        return String(moment(date+ ' ' + time).format("dddd MMMM Do, YYYY  h:mm a"));
    }
}
const get_date_str = (date) => {
    //Tuesday, February 14th 2023
    if(date){
        return String(moment(date).format("dddd MMMM Do, YYYY"));
    }
    else{
        return 'Invalid Date Format';
    }
}
const get_date_time_pretty = (date) => {
        if(date){
            return prettydate.format(new Date(date));
        }
        else{
            return null;
        }
}
const get_slug = (str) => {
        if(!str)
            return "";
        return str
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
}
const get_currency = (amount) => {
        return Math.round(100 * parseFloat(typeof amount === 'string' ? amount.replace(/[$,]/g, '') : amount));
}
const get_contains = (value, searchFor) => {
        return (value || '').indexOf(searchFor) > -1;
}
const remove_html_str = (str) => {
        var regex = /(<([^>]+)>)/ig;
        _data = "";
        if(str){
            _data = str.replace(regex, "");
        }
        return _data;
}
const get_time_str = (date) => {
    if(date){
        var t = moment(date);
        return t.format("h:mm a");
    }
    else{
        var t = moment();
        return t.format("h:mm a");
    }
}
const get_date_time_obj = (date) => {
        if(date){
            return moment(date);
        }
        else{
            return moment(new Date());
        }
}
const get_iso_str_by_date_time = (date,time) => {
        if(date){
            return moment(date+ ' ' + time).toISOString();
        }
        else{
            return moment().toISOString();
        }
}
const remove_money = (n) => {
        if(!n){
            n='0';
        }
        return String(n).replace('$','');
}
const get_money = (n) => {
        var n = parseFloat(n);
        if(!n || isNaN(n)){
            n = 0;
        }
        return "$" + n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
const get_cents = (number) => {
        return  parseInt((Number(number) * 100)).toString();
}
const get_month_title_short = (d) =>{
        switch(d) {
            case 1:
                return 'Jan';
                break;
            case 2:
                return 'Feb';
                break;
            case 3:
                return 'Mar';
                break;
            case 4:
                return 'Apr';
                break;
            case 5:
                return 'May';
                break;
            case 6:
                return 'Jun';
                break;
            case 7:
                return 'Jul';
                break;
            case 8:
                return 'Aug';
                break;
            case 9:
                return 'Sep';
                break;
            case 10:
                return 'Oct';
                break;
            case 11:
                return 'Nov';
                break;
            case 12:
                return 'Dec';
                break;
            default:
                return 'Jan';
        }
}
const get_month_title = (d) =>{
        switch(d){
            case 1:
                return 'January';
                break;
            case 2:
                return 'February';
                break;
            case 3:
                return 'March';
                break;
            case 4:
                return 'April';
                break;
            case 5:
                return 'May';
                break;
            case 6:
                return 'June';
                break;
            case 7:
                return 'July';
                break;
            case 8:
                return 'August';
                break;
            case 9:
                return 'September';
                break;
            case 10:
                return 'October';
                break;
            case 11:
                return 'November';
                break;
            case 12:
                return 'December';
                break;
            default:
                return 'January';
        }
}
const get_ip_address = (callback) => {
        require('dns').lookup(require('os').hostname(), function (error, add, fam) {
            callback(error,add);
        })
}
text_truncate = (str,length,ending) => {
        if (length == null) { length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
}
const validate_email = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}
const set_file_upload = (req,_file_path,callback) => {
        req.busboy.on('file',(fieldname,file,filename)=>{
            const fstream = fs.createWriteStream(path.join(_file_path,filename.filename));
            file.pipe(fstream);
            fstream.on('close', ()=>{
                callback(filename.filename);
            });
        });
}
const set_resize_photo_file = (org_file,sizes,callback) => {
        r_error=null;
        /*
        var sizes = [{
            path: file_path+'a' + new_filename,
            xy: 800
        },{
            path: file_path+'b' + new_filename,
            xy: 300
        },{
            path: file_path+'c' + new_filename,
            xy: 100
        }];
        */
        async function run() {
            try {
                Promise.map(sizes, function(size) {
                    sharp(org_file)
                        .resize(size.xy)
                        .toFile(size.path,(error,info)=>{
                            if(error){
                                r_error=error;
                                console.log('set_resize_photo_file');
                            }
                        });
                }).then(function(x){
                });
            } catch (e) {
                if(e){
                    r_error=error;
                }
            } finally {
                callback(r_error);
            }
        }
        run();
    }
const set_resize_square_photo_file = (org_file,sizes,callback) => {
        let r_error=null;
        /*
        var sizes = [{
            path: file_path+'a' + new_filename,
            xy: 800
        },{
            path: file_path+'b' + new_filename,
            xy: 300
        },{
            path: file_path+'c' + new_filename,
            xy: 100
        }];
        */
        async function run() {
            try {
                Promise.map(sizes, function(size) {
                    sharp(org_file)
                        .resize(size.xy, size.xy,{fit:sharp.fit.fill,quality:100})
                        .toFile(size.path,(error,info)=>{
                            if(error){
                                if(error){
                                    r_error=error;
                                }
                            }
                        });
                }).then(function(x){
                });
            } catch (e) {
                if(e){
                    r_error=e;
                }
            } finally {
                callback(r_error);
            }
        }
        run();
    }
const set_photo_file = (file_path,org_filename,new_filename,callback) =>{
        sharp(file_path+org_filename)
            .toFile(file_path+new_filename, (error, info) => {
                callback(error,new_filename);
            });
    }
const get_file_buffer = (file_path,callback) => {
        fs.readFile(file_path,function(error, buffer){
            callback(error,buffer);
        })
}
const get_mp3_duration = (secs) => {
        millisec = secs * 1000;
        duration = format(millisec);
        return duration;
}
const get_paging_list = (data_list,current_page,page_size,callback) =>{
        if(current_page>=1||!current_page){
            current_page=1;
        }
        item_count = data_list.length;
        skip = page_size * (current_page - 1);
        page_count = Math.ceil(item_count / page_size);
        new_data_list = data_list.slice(skip, skip + page_size);
        callback(new_data_list,item_count,page_count);
}
const get_older_date = (date_1, date_2) =>{
        if(date_1.getTime() < date_2.getTime()){
            return 'date1';
        }else{
            return 'date2';
        }
    }
module.exports = {
    get_guid,
    is_guid,
    get_file_ext,
    get_title_url,
    get_id,
    get_query,
    get_date_time_str,
    get_date_str,
    get_data_time_obj,
    get_date_time_pretty,
    get_iso_str_by_date_time,
    get_money,
    get_cents,
    get_contains,
    remove_html_str,
    get_time_str,
    get_date_time_obj,
    get_date_time_pretty,
    get_slug,
    remove_money,
    get_currency,
    get_month_title_short,
    get_month_title,
    text_truncate,
    validate_email,
    set_file_upload,
    set_resize_photo_file,
    set_resize_square_photo_file,
    set_photo_file,
    get_file_buffer,
    get_mp3_duration,
    get_paging_list,
    get_older_date,
};
