import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import TabPanel from '../../components/TabPanel';

import BelowTarget from '../BelowTarget';
import AllStats from '../AllStats';

import styles from './index.module.scss';
import { Props as ProgrammerCardProps } from '../../components/ProgrammerCard';
import { Props } from './index';

const Component = ({ visible, setVisible }: Props) => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');

  const [data, setData] = useState<ProgrammerCardProps[]>([]);
  const [searchedData, setSearchedData] = useState<ProgrammerCardProps[]>([]);

  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < 1000; i++) {
      tmp.push({
        id: i,
        imageUri: `https://source.unsplash.com/random/200x200?sig=${i}`,
        title: `${i} Programmamanagement  Overla  lorem ipsum dolor sit amet`,
        kPICounter: 7,
        projectsCounter: 6,
        status: i % 2 === 0,
      });
    }
    setData([...tmp]);
  }, []);

  useEffect(() => {
    searchValue.length > 0
      ? setSearchedData([
          ...data.filter((item) => item.title.includes(searchValue)),
        ])
      : setSearchedData([...data]);
  }, [searchValue, data]);

  console.log('searchedData', searchedData);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <Modal visible={visible} setVisible={() => setVisible(false)}>
      <div>
        <div className={styles.header}>
          <Typography variant="h5">Prestaties</Typography>
          <CloseIcon
            onClick={() => setVisible(false)}
            className={styles.closeIcon}
          />
        </div>
        <AppBar position="static" className={styles.appBar}>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab
              name="BelowTarget"
              label="Below Target"
              counter={data.length}
            />
            <Tab name="All" label="All" counter={searchedData.length} />
          </Tabs>
          <Typography className={styles.padding} />

          <Input
            name="searchInput"
            value={searchValue}
            setValue={setSearchValue}
            rightIcon={<SearchIcon />}
          />
        </AppBar>

        <TabPanel value={selectedTab} index={0}>
          <BelowTarget />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <AllStats data={searchedData} />
        </TabPanel>
      </div>
    </Modal>
  );
};

export default Component;
