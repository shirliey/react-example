import React from 'react'
import { ConfigProvider, Table, Tag, Modal, Button, Input, Select, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import zhCN from 'antd/es/locale/zh_CN'
import provinces from './cityData'
// import { getCityList } from './api/index'

const {Option} = Select;

const data = [
  {
    key: '1',
    name: '1胡彦斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '2',
    name: '2胡彦祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['查看']
  },
  {
    key: '3',
    name: '3彦斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '4',
    name: '4胡祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '5',
    name: '5胡斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['查看']
  },
  {
    key: '6',
    name: '6彦祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '7',
    name: '7胡彦斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '8',
    name: '8胡彦祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['查看']
  },
  {
    key: '9',
    name: '9彦斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '10',
    name: '10胡祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
  {
    key: '11',
    name: '11胡斌',
    age: 32,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['查看']
  },
  {
    key: '12',
    name: '12彦祖',
    age: 42,
    address: '山东省青岛市黄岛区武夷山路157号千禧龙花园10-5',
    tags: ['编辑', '查看']
  },
];
class Customer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedRowKeys: [], // 已选择的列表id
      dataTable: [], // table数据
      columnsTable: null, // table列名
      pageSize: 5, // 每页几条
      pageNum: 1, // 当前页
      total: 12, // 共有多少条
      isVisibleEdit: false, // 是否显示编辑弹出框
      editSubmitLoading: false, // 编辑弹出框是否设置loading
      citys: [], // 编辑-城市
      regions: [], // 编辑-地区
      detailsData: { // 编辑-详情数据
        name: '胡丽',
        age: 32,
        province: '山东',
        city: '青岛市',
        region: '黄岛区',
        address: '武夷山路157号千禧龙花园10-5'
      },
      isVisibleScan: false, // 是否显示详情弹出框
    }
  }

  // 初始化操作
  componentDidMount() {
    // table显示列对应关系
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
      },
      {
        title: '住址',
        dataIndex: 'address',
      },
      {
        title: '操作',
        dataIndex: 'tags',
        fixed: 'right',
        render: tags => (
          <>
          {tags.map(tag => {
            return <Tag color="blue" key={tag} onClick={this.handleBtnclick.bind(this, tag)}>{tag}</Tag>
          })}
          </>
        ),
      },
    ];
    const _this = this;
    function searchLists(values) {
      _this.searchLists(values);
    }
    columns.map(item => {
      item.ellipsis = true;
      item.align = 'center';
      item.filterDropdown = () => (
        <Form style={{ padding: 10 }} onFinish={searchLists}>
          <Form.Item label="姓名" name="name" rules={[{ required: false, message: '请输入您的姓名'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="年龄" name="age" rules={[{ required: false, message: '请输入您的年龄'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="住址" name="address" rules={[{ required: false, message: '请输入您的住址'}]}>
            <Select showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }>
              {provinces.map( province => (
                <Option key={province.value} value={province.value}>{province.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />} size="small">搜索</Button>
          </Form.Item>
        </Form>
      );
      item.filterIcon = filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
      return item;
    });
    this.setState({
      columnsTable: columns
    });
    // table显示第一页
    this.changePage();
    // 改变编辑弹出框对应的城市和地区
    this.changeOrigionProvince();
  }

  // 编辑弹出框-省市区联动
  changeOrigionProvince(cityZero, regionZero) {
    for(let item of provinces){ // 城市
      if(item.value === this.state.detailsData.province) {
        this.setState({
          citys: item.children
        });
        if(cityZero) { // 省份切换
          let details = Object.assign(this.state.detailsData, {city: item.children[0].value, address: ''});
          this.setState({
            detailsData: details
          });
        }
        for(let j = 0; j < item.children.length; j++) { // 地区
          let itemScd = item.children[j];
          if(itemScd.value === this.state.detailsData.city) {
            this.setState({
              regions: itemScd.children
            });
          }
          if(itemScd.value === this.state.detailsData.city && regionZero) {
            let details = Object.assign(this.state.detailsData, {region: itemScd.children[0].value, address: ''});
            this.setState({
              detailsData: details
            });
          }
        }
      }
    }
  }

  // 编辑-切换省份
  changeProvince(value) {
    if(value !== this.state.detailsData.province) {
      let details = Object.assign(this.state.detailsData, {province: value});
      this.setState({
        detailsData: details
      });
      this.changeOrigionProvince(true, true);
    }
  }

  // 编辑-切换城市
  changeCity(value) {
    if(value !== this.state.detailsData.city) {
      let details = Object.assign(this.state.detailsData, {city: value});
      this.setState({
        detailsData: details
      });
      this.changeOrigionProvince(false, true);
    }
  }

  // table复选框
  selectTableChange = selectedRowKeys => {
    this.setState({
      selectedRowKeys: selectedRowKeys
    });
  }

  // 搜索列表
  searchLists(values) {
    this.changePage(values);
  }

  // table分页
  changePage(values, current, pageSize) {
    // getCityList().then(res => {
    //   console.log(res);
    // });
    values = values === undefined ? {name: '', age: '', address: ''} : values;
    console.log(values);
    current = current === undefined ? this.state.pageNum : current;
    pageSize = pageSize === undefined ? this.state.pageSize : pageSize;
    let dataStart = (current - 1) * pageSize;
    let dataEnd = current * pageSize;
    this.setState({
      pageNum: current,
      pageSize: pageSize,
      dataTable: data.slice(dataStart, dataEnd)
    });
  }

  // table表头搜索事件
  handleSearch(selectedKeys, confirm, dataIndex) {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  }

  // table按钮点击事件
  handleBtnclick(tag, e) {
    if(tag === '编辑'){
      this.setState({
        isVisibleEdit: true,
        detailsData: {
          name: '胡丽',
          age: 32,
          province: '山东',
          city: '青岛市',
          region: '黄岛区',
          address: '武夷山路157号千禧龙花园10-5'
        }
      });
    }else if(tag === '查看'){
      this.setState({
        isVisibleScan: true,
        detailsData: {
          name: '胡丽',
          age: 32,
          province: '山东',
          city: '青岛市',
          region: '黄岛区',
          address: '武夷山路157号千禧龙花园10-5'
        }
      });
    }
  }

  // table行点击
  handleClickRow(val) {
    console.log(val);
  }

  // 编辑弹出层提交
  handleEditSubmit() {
    this.setState({
      editSubmitLoading: true
    });
    let _this = this;
    setTimeout(() => {
      _this.setState({
        editSubmitLoading: false,
        isVisibleEdit: false
      });
    }, 1000);
  }
  // 编辑弹出层取消
  handleEditCancel() {
    this.setState({
      isVisibleEdit: false
    });
  }
  // 详情弹出层取消
  handleScanClose() {
    this.setState({
      isVisibleScan: false
    });
  }

  render() {
    // table选择
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.selectTableChange,
    };
    // 表格分页属性
    const paginationProps = {
      size: 'small',
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: () => `共${this.state.total}条`,
      pageSize: this.state.pageSize,
      current: this.state.pageNum,
      pageSizeOptions: [5, 10, 20, 50],
      total: this.state.total,
      onChange: (current, pageSize) => this.changePage(undefined, current, pageSize),
    };
    return (
      <ConfigProvider locale={zhCN}>
        <div className="jmain">
          <Table className="jtable" rowSelection={rowSelection} pagination={paginationProps} dataSource={this.state.dataTable} columns={this.state.columnsTable} onRow={record => { return {onClick: () => {this.handleClickRow(record);}}; }}
          ></Table>
          <Modal visible={this.state.isVisibleEdit} title="编辑" onOk={this.handleEditSubmit.bind(this)} onCancel={this.handleEditCancel.bind(this)} footer={[
            <Button key="back" onClick={this.handleEditCancel.bind(this)}>取消</Button>,
            <Button key="submit" type="primary" loading={this.state.editSubmitLoading} onClick={this.handleEditSubmit.bind(this)}>提交</Button>,
          ]}>
            <div className="jedit-box">
              <label>姓名：</label>
              <Input className="jw10" placeholder="请输入姓名" defaultValue={this.state.detailsData.name}/>
            </div>
            <div className="jedit-box">
              <label>年龄：</label>
              <Input className="jw10" placeholder="请输入年龄" defaultValue={this.state.detailsData.age}/>
            </div>
            <div className="jedit-box">
              <label>住址：</label>
              <div className="jw10">
                <Select className="jw3" showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 } defaultValue={this.state.detailsData.province} value={this.state.detailsData.province} onChange={this.changeProvince.bind(this)}>
                  {provinces.map( province => (
                    <Option key={province.value} value={province.value}>{province.label}</Option>
                  ))}
                </Select>
                <Select className="jw3" showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }  defaultValue={this.state.detailsData.city} value={this.state.detailsData.city} onChange={this.changeCity.bind(this)}>
                  {this.state.citys.length > 0 && this.state.citys.map( city => (
                    <Option key={city.value} value={city.value}>{city.label}</Option>
                  ))}
                </Select>
                <Select className="jw3" showSearch optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }  defaultValue={this.state.detailsData.region} value={this.state.detailsData.region}>
                  {this.state.regions.length > 0 && this.state.regions.map( region => (
                    <Option key={region.value} value={region.value}>{region.label}</Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="jedit-box">
              <label></label>
              <Input className="jw10" placeholder="请输入详细地址" defaultValue={this.state.detailsData.address} value={this.state.detailsData.address}/>
            </div>
          </Modal>
          <Modal visible={this.state.isVisibleScan} title="详情" onCancel={this.handleScanClose.bind(this)} footer={null}>
          <p>姓名：{this.state.detailsData.name}</p>
          <p>年龄：{this.state.detailsData.age}</p>
          <p>住址：{this.state.detailsData.province}{this.state.detailsData.city}{this.state.detailsData.region}{this.state.detailsData.address}</p>
          </Modal>
        </div>
      </ConfigProvider>
    );
  }
};
export default Customer;
