import {
  InteractiveStrategy,
  QuestionType,
  Routes,
  StepType,
} from "./router-types";

import ApolloExample from "../subbase/example/basic/apollo-example";
import MindMapExplain from "../subbase/example/mindmap/script/mindmap_explain";
import MindemapInteractive from "../subbase/example/mindmap/script/mindmap_interactive";

// 单页示例
import Page2 from "./pages/page2";
import ApolloOptionExample from "../subbase/example/option/script/ApolloOptionExample";

/** 题目配置表 */
const routes: Array<Routes> = [


  {
    name: "普通单选题类别1",
    path: "1",
    prefabPath: null,
    component: ApolloOptionExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page_choice/config/step0",
    },
  },

  {
    name: "普通单选题类别2",
    path: "8",
    prefabPath: null,
    component: ApolloOptionExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page_choice/config/step1",
    },
  },

  {
    name: "普通单选题类别3",
    path: "1",
    prefabPath: null,
    component: ApolloOptionExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
    },
    props: {
      configPath: "pages/page_choice/config/step4",
    },
  },

  {
    name: "普通多选题模版-手动提交",
    path: "1",
    prefabPath: null,
    component: ApolloOptionExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page_choice/config/step2",
    },
  },

  {
    name: "普通多选题模版-3动提交",
    path: "1",
    prefabPath: null,
    component: ApolloOptionExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
    },
    props: {
      configPath: "pages/page_choice/config/step3",
    },
  },


  {
    name: "一题多页-手动切页提交",
    path: "9",
    meta: {
      interactiveStrategy: InteractiveStrategy.Manual,
      questionType: QuestionType.MultiQuestion,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloOptionExample,
        meta: {
          stepType: StepType.Question,
          isBtnNextShow: true,
        },
        props: {
          configPath: "pages/page_choice/config/step0",
        },
      },
      {
        path: "1",
        prefabPath: null,
        component: ApolloOptionExample,
        meta: {
          stepType: StepType.Question,
          isBtnPrevShow: true,
          isBtnNextShow: true,
        },
        props: {
          configPath: "pages/page_choice/config/step1",
        },
      },
      {
        path: "2",
        prefabPath: null,
        component: ApolloOptionExample,
        meta: {
          stepType: StepType.Question,
          isBtnPrevShow: true,
          isBtnSubmitShow: true,
        },
        props: {
          configPath: "pages/page_choice/config/step5",
        },
      },
    ],
  },

  {
    name: "一题多页-自动切页提交",
    path: "10",
    meta: {
      interactiveStrategy: InteractiveStrategy.Manual,
      questionType: QuestionType.MultiQuestion,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloOptionExample,
        meta: {
          stepType: StepType.Question,
        },
        props: {
          configPath: "pages/page_choice/config/step6",
        },
      },
      {
        path: "1",
        prefabPath: null,
        component: ApolloOptionExample,
        meta: {
          stepType: StepType.Question,
        },
        props: {
          configPath: "pages/page_choice/config/step7",
        },
      }
    ],
  },




  // #region 组件演示 page0
  {
    name: "组件示例",
    path: "0",
    meta: {
      questionType: QuestionType.Explanation,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step0",
        },
      },
      {
        path: "1",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step1",
        },
      },
      {
        path: "2",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step2",
        },
      },
      {
        path: "3",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step3",
        },
      },
      {
        path: "4",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step4",
        },
      },
      {
        path: "5",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step5",
        },
      },
      {
        path: "6",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step6",
        },
      },
      {
        path: "7",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page0/config/step7",
        },
      },
    ],
  },
  // #endregion
  // #region 触控演示 page1-3
  {
    name: "基础触控组件演示模版",
    path: "1",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/page1/config/step0",
    },
  },
  {
    name: "多页教师讲解+点击示例",
    path: "2",
    meta: {
      questionType: QuestionType.Explanation,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page2/config/step0",
        },
      },
      {
        path: "1",
        prefabPath: "pages/page2/prefab/index",
        component: Page2,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page2/config/step1",
        },
      },
    ],
  },
  {
    name: "演示模版-未开发",
    path: "3",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/page3/config/step0",
    },
  },
  // #endregion
  // #region 点击演示 page4-6
  {
    name: "演示模版-未开发",
    path: "4",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "5",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "6",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  // #endregion
  // #region 选项演示 page7-10
  {
    name: "普通点击模版-手动提交",
    path: "7",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page7/config/step0",
    },
  },
  {
    name: "普通点击模版-自动提交",
    path: "8",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
    },
    props: {
      configPath: "pages/page8/config/step0",
    },
  },
  {
    name: "一题多页-手动切页提交",
    path: "9",
    meta: {
      interactiveStrategy: InteractiveStrategy.Manual,
      questionType: QuestionType.MultiQuestion,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
          isBtnNextShow: true,
        },
        props: {
          configPath: "pages/page9/config/step0",
        },
      },
      {
        path: "1",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
          isBtnPrevShow: true,
          isBtnNextShow: true,
        },
        props: {
          configPath: "pages/page9/config/step1",
        },
      },
      {
        path: "2",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
          isBtnPrevShow: true,
          isBtnSubmitShow: true,
        },
        props: {
          configPath: "pages/page9/config/step2",
        },
      },
    ],
  },
  {
    name: "一题多页-自动切页提交",
    path: "10",
    meta: {
      interactiveStrategy: InteractiveStrategy.Manual,
      questionType: QuestionType.MultiQuestion,
    },
    children: [
      {
        path: "0",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
        },
        props: {
          configPath: "pages/page10/config/step0",
        },
      },
      {
        path: "1",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
        },
        props: {
          configPath: "pages/page10/config/step1",
        },
      },
      {
        path: "2",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Question,
        },
        props: {
          configPath: "pages/page10/config/step2",
        },
      },
    ],
  },
  // #endregion
  // #region 拖拽演示 page11-20
  {
    name: "拖拽模版示例",
    path: "11",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnResetShow: true,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page11/config/step0",
    },
  },
  {
    name: "自由拖拽模版示例",
    path: "12",
    meta: {
      questionType: QuestionType.Explanation,
    },
    children: [
      {
        path: "1",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page12/config/step0",
        },
      },
      {
        path: "2",
        prefabPath: null,
        component: ApolloExample,
        meta: {
          stepType: StepType.Explanation,
        },
        props: {
          configPath: "pages/page12/config/step1",
        },
      },
    ],
  },
  {
    name: "演示模版-未开发",
    path: "13",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "14",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "15",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "16",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "17",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "18",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "19",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "20",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  // #endregion
  // #region 键盘演示 page21-25
  {
    name: "键盘模版示例-普通键盘",
    path: "21",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
    },
    props: {
      configPath: "pages/page21/config/step0",
    },
  },
  {
    name: "键盘模版示例-九宫格键盘",
    path: "22",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      interactiveStrategy: InteractiveStrategy.Manual,
    },
    props: {
      configPath: "pages/page22/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "23",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "24",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "25",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  // #endregion
  // #region 连线演示 page26-30
  {
    name: "连线模版-单对单",
    path: "26",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page26/config/step0",
    },
  },
  {
    name: "连线模版-单对多",
    path: "27",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.SingleQuestion,
      isBtnSubmitShow: true,
    },
    props: {
      configPath: "pages/page27/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "28",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "29",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  {
    name: "演示模版-未开发",
    path: "30",
    prefabPath: null,
    component: ApolloExample,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/_default/config/step0",
    },
  },
  // #endregion
  // #region 思维导图 page31-32
  {
    name: "思维导图-点击",
    path: "31",
    prefabPath: null,
    component: MindMapExplain,
    meta: {
      questionType: QuestionType.Explanation,
    },
    props: {
      configPath: "pages/page31/config/step0",
    },
  },
  {
    name: "思维导图-拖拽",
    path: "32",
    prefabPath: null,
    component: MindemapInteractive,
    meta: {
      questionType: QuestionType.SingleQuestion,
      interactiveStrategy: InteractiveStrategy.Constantly,
    },
    props: {
      configPath: "pages/page31/config/step0",
    },
  },
  // #endregion
];

export default routes;
