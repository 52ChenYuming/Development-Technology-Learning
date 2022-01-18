import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemNum: 1, // 第几题
    itemDetail: [
      {
        topic_id: 20,
        active_topic_id: 4,
        type: 'ONE',
        topic_name: '题目一',
        active_id: 1,
        active_title: '欢乐星期五标题',
        active_topic_phase: '第一周',
        active_start_time: '1479139200',
        active_end_time: '1482163200',
        topic_answer: [
          {
            topic_answer_id: 1,
            topic_id: 20,
            answer_name: '答案aaaa',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 2,
            topic_id: 20,
            answer_name: '答案bbbb',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 3,
            topic_id: 20,
            answer_name: '答案cccc',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 4,
            topic_id: 20,
            answer_name: '正确答案',
            is_standard_answer: 1,
          },
        ],
      },
      {
        topic_id: 21,
        active_topic_id: 4,
        type: 'MORE',
        topic_name: '题目二',
        active_id: 1,
        active_title: '欢乐星期五标题',
        active_topic_phase: '第一周',
        active_start_time: '1479139200',
        active_end_time: '1482163200',
        topic_answer: [
          {
            topic_answer_id: 5,
            topic_id: 21,
            answer_name: '正确答案',
            is_standard_answer: 1,
          },
          {
            topic_answer_id: 6,
            topic_id: 21,
            answer_name: '答案B',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 7,
            topic_id: 21,
            answer_name: '答案C',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 8,
            topic_id: 21,
            answer_name: '答案D',
            is_standard_answer: 0,
          },
        ],
      },
      {
        topic_id: 22,
        active_topic_id: 4,
        type: 'MORE',
        topic_name: '题目三',
        active_id: 1,
        active_title: '欢乐星期五标题',
        active_topic_phase: '第一周',
        active_start_time: '1479139200',
        active_end_time: '1482163200',
        topic_answer: [
          {
            topic_answer_id: 9,
            topic_id: 21,
            answer_name: '正确答案',
            is_standard_answer: 1,
          },
          {
            topic_answer_id: 10,
            topic_id: 21,
            answer_name: 'BBBBBB',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 11,
            topic_id: 21,
            answer_name: 'CCCCCC',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 12,
            topic_id: 21,
            answer_name: 'DDDDDD',
            is_standard_answer: 0,
          },
        ],
      },
      {
        topic_id: 23,
        active_topic_id: 4,
        type: 'MORE',
        topic_name: '题目四',
        active_id: 1,
        active_title: '欢乐星期五标题',
        active_topic_phase: '第一周',
        active_start_time: '1479139200',
        active_end_time: '1482163200',
        topic_answer: [
          {
            topic_answer_id: 13,
            topic_id: 21,
            answer_name: '正确答案',
            is_standard_answer: 1,
          },
          {
            topic_answer_id: 14,
            topic_id: 21,
            answer_name: 'A是错的',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 15,
            topic_id: 21,
            answer_name: 'D是对的',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 16,
            topic_id: 21,
            answer_name: 'C说的不对',
            is_standard_answer: 0,
          },
        ],
      },
      {
        topic_id: 24,
        active_topic_id: 4,
        type: 'MORE',
        topic_name: '题目五',
        active_id: 1,
        active_title: '欢乐星期五标题',
        active_topic_phase: '第一周',
        active_start_time: '1479139200',
        active_end_time: '1482163200',
        topic_answer: [
          {
            topic_answer_id: 17,
            topic_id: 21,
            answer_name: '正确答案',
            is_standard_answer: 1,
          },
          {
            topic_answer_id: 18,
            topic_id: 21,
            answer_name: '错误答案',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 19,
            topic_id: 21,
            answer_name: '错误答案',
            is_standard_answer: 0,
          },
          {
            topic_answer_id: 20,
            topic_id: 21,
            answer_name: '错误答案',
            is_standard_answer: 0,
          },
        ],
      },
    ],
    answerid: [], // 选择的答案id
  },
  mutations: {
    // 记录答案
    remberAnswer(state, id) {
      state.answerid.push(id);
    },
    // 下一题
    nextItem(state, num) {
      state.itemNum += num;
    },
  },
  actions: {
    remberAnswerAction({ commit, state }, id) {
      // 点击下一题要调用的方法
      commit('remberAnswer', id);
      if (state.itemNum < state.itemDetail.length) {
        commit('nextItem', 1);
      }
    },
  },
  getters: {
    rightAnswer(state) {
      // 找到所有正确答案
      let arr = [];
      for (let item of state.itemDetail) {
        for (let answer of item.topic_answer) {
          if (answer.is_standard_answer == 1) {
            arr.push(answer.topic_answer_id);
          }
        }
      }
      return arr;
    },
  },
  modules: {},
});
