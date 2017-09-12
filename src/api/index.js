import axios from 'axios'

const HOST = 'https://cnodejs.org/api/v1'

export function fetch(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        // axios.get(HOST + url)
        //     .then(response => {
        //       resolve(response.data);
        //     })
        //     .catch((error) => {
        //        reject(error)
        //     })
        axios({
                method: method,
                url: HOST + url,
                //params:params
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
      /**
     * 获取文章列表
     * @param {any} params
     * @returns
     */
    TopicsList(params) {
        return fetch(`/topics/${params}`)
    }

}