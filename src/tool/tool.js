import jsMerge from './merge';
import config from './config';
import PubSub from 'pubsub-js';

class Tool{
    /**
     * 构造函数
     */
    constructor(){

    }
    /**
     * 事件订阅对象
     */
    PubSub = PubSub;
    /**
     * 深度拷贝和深度合并合并对象
     * @type {deepAssign}
     */
    merge = jsMerge;

    /**
     * 获取search参数
     * @param name
     * @returns {*}
     */
    getQueryField = (name) => {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURIComponent(r[2]);
        return null;
    };


    /**
     * 空函数
     */
    noop(){

    }


    /**
     * 提示框
     * @param obj.text 提示文本
     * @param obj.btns 按钮文本
     * @param obj.confirm 按钮回调函数
     * @constructor
     */
    Alert(obj){
        const data = this.MergeModalObj(obj);
        data.callbacks = [obj.confirm];
        setTimeout(()=>{
            this.PubSub.publish('ALERT',data)
        });
    }

    /**
     * 询问框
     * @param obj.text 提示文本
     * @param obj.btns 按钮文本
     * @param obj.confirm 确定按钮回调函数
     * @param obj.cancel 取消按钮回调函数
     * @constructor
     */
    Confirm(obj){
        const data = this.MergeModalObj(obj);
        data.callbacks = [obj.confirm, obj.cancel];
        setTimeout(()=>{
            this.PubSub.publish('COMFIRM',data)
        });
    }
    /**
     * 合并弹窗自定义数据
     */
    MergeModalObj(obj){
        const data = {};
        data.text = obj.text;
        if(obj.btns) {
        	if(obj.btns instanceof Array){
        		data.btns = obj.btns;
        	}else{
        		data.btns = [obj.btns];
        	}
        }
        return data;
    }
    /**
     * 加载中函数
     */
    showLoading = ()=>{
        setTimeout(()=> {
            this.PubSub.publish('LOADING', {});
        });
    };

    /**
     * 隐藏加载中
     */
    hideLoading = ()=>{
        setTimeout(()=> {
            this.PubSub.publish('CLOSE_LOADING', {});
        });
    };
    /**
     * 吐司提示
     * @param obj.text 必填
     * @param obj.duration 单位ms 不必须 默认2000
     */
    showToast = (obj)=>{
        setTimeout(()=> {
            this.PubSub.publish('TOAST', {text: obj.text , duration: obj.duration});
        });
    };

}

export default new Tool();