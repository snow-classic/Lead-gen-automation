import { Table, Input, Button, Space , Modal} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { DeleteCampaign } from '../actions/asyncActions'
import { withRouter } from 'next/router'
import EditCampaign from '../reusables/editCampaign'

const { Column } = Table;
class App extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
    selectedRows: [],
    campaign_selected: '',
    editcampaign: false,
    warning:false
  };

rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys.length}`, 'selectedRows: ', selectedRows);
    this.setState({selectedRows})
  },
};

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

   onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
   };
  
  handleDelete = (e) => {
    e.preventDefault
    console.log("selected rows", this.state.selectedRows)

    DeleteCampaign(this.state.selectedRows[0].id)
  }

  jobsHandler = (e) => {
    e.preventDefault
    // console.log(e)
    this.props.router.push({pathname: '/jobs',query:{campaign:e.campaign_name}})
  }

  editHandler = (e) => {
    e.preventDefault
    // console.log("e", e)
    this.setState({editcampaign:e})
  }

  componentWillReceiveProps = (props) => {
    if (props.deletecampaign) {
      if (props.deletecampaign.status == 204) {
        this.setState({warning:false})
      }
      // this.setState({warning:true})
    }
  }

  render() {
    // console.log("warnings", this.props)
    const { selectedRows } = this.state;

    const columns = [
      {
        title: 'Campaign_name',
        dataIndex: 'campaign_name',
        key: 'campaign_name',
        width: '8%',
        ...this.getColumnSearchProps('campaign_name'),
      },
      {
        title: 'Location',
        dataIndex: 'locations',
        key: 'locations',
        width: '5%',
        ...this.getColumnSearchProps('locations'),
      },
      {
        title: 'Job Titles',
        dataIndex: 'job_titles',
        key: 'job_titles',
        width: '10%',
        ...this.getColumnSearchProps('job_titles'),
      },
      {
        title: 'Frequency',
        dataIndex: 'frequency',
        key: 'frequency',
        width: '0.1%',
        ...this.getColumnSearchProps('frequency'),
        // sorter: (a, b) => a.address.length - b.address.length,
        // sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'End Date',
        dataIndex: 'end_date',
        key: 'end_date',
        ...this.getColumnSearchProps('end_date'),
        // sorter: (a, b) => a.address.length - b.address.length,
        // sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Start Date',
        dataIndex: 'start_date',
        key: 'start_date',
        ...this.getColumnSearchProps('start_date'),
        // sorter: (a, b) => a.address.length - b.address.length,
        // sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: '5%',
        ...this.getColumnSearchProps('status'),
      },
      {
        title:"Action",
        key:"action",
        render:(text, record) => (
          <Space size="middle">
            <a onClick={() =>this.editHandler(record)}>Edit {record.lastName}</a>
            <a onClick={() =>this.jobsHandler(record)}>Jobs</a>
          </Space>
        )}
    ];

    const hasSelected = selectedRows.length > 0;
    
    if (!this.props.AllCampaign) {
      return <div />
    }

    return <div>
      <EditCampaign edit={this.editHandler} visiblity={this.state.editcampaign}/>
      <div style={{ marginBottom: 16 }}>
        
        <Button type="primary" disabled={!hasSelected} onClick={()=>this.setState({warning: true})}>
          Delete
          </Button>
        
          <Modal
            title="Warning"
            centered
            visible={this.state.warning}
            onOk={this.handleDelete}
            onCancel={() => this.setState({warning: false})}
            width={300}
          >
            <p>Are you sure? You want to delete this campaign.</p>
          </Modal>

          {/* <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRows[0].id}th campaign` : ''}
          </span> */}
        </div>
      <Table columns={columns} pagination={{ pageSize: 5 }} rowSelection={{
          type: 'radio',
          ...this.rowSelection,
        }}
        dataSource={this.props.AllCampaign || []} rowKey="id" >
        <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />

        </Table>
    </div>;
  }
}

export default withRouter(App)