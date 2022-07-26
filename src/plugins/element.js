import { Form, Button, Card, Row, Col, TableColumn, Table, Dialog, Input, FormItem } from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Form)
    Vue.use(Button)
    Vue.use(Card)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(TableColumn)
    Vue.use(Table)
    Vue.use(Dialog)
    Vue.use(Input)
    Vue.use(FormItem)
  }
}
export default element
