/*
 * / filename:  EvaluationForm.js
 * / Author:    Grazielle Agcaoili
 * / brief:     Student Evaluation Form
 * / to fix:    radio button label, size for the whole table, connection to backend    
 */

import React, { useState} from 'react';
import { Table, Radio, Input, Button } from 'antd';
import './EvaluationForm.css';


const EvaluationTable = () => {

    const [scores, setScores] = useState({});


    const handleScoreChange = (key, value) => {
        setScores({
            ...scores,
            [key]: value,
        });
    };

    const getTotalScore = () => {
        return Object.values(scores).reduce((total, num) => total + num, 0);
    };
    const columns = [
        {
            title: 'CRITERIA',
            dataIndex: 'criteria',
            key: 'criteria',
            width: '25%',
        },
        {
            title: 'RATINGS',
            dataIndex: 'ratings',
            key: 'ratings',
            width: '25%',
        },
        {
            title: 'COMMENTS',
            dataIndex: 'comments',
            key: 'comments',
            render: () => (
                <Input.TextArea variant="borderless" style={{ resize: 'none', }} rows={3} />
            ),
            width: '25%',
        },
        {
            title: 'PTS',
            key: 'points',
            render: (text, record, index) => (
                <Radio.Group
                    defaultValue={record.points}
                    style={{ display: 'flex', justifyContent: 'center' }}
                    onChange={(e) => handleScoreChange(record.key, e.target.value)}
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="radio-wrapper">
                            <Radio name={`radio-grade-${record.key}`} value={value} />
                            <label className="radio-label">{value}</label>
                        </div>
                    ))}
                </Radio.Group>
            ),
            width: '25%',
        },
    ];

    const data = [
        {
            key: '1',
            criteria: 'Class & Meeting Attendance',
            ratings: 'Attended minimum of 90% of Team meetings and class, especially lab work sessions, and all Client meetings.',
            comments: '',
            points:0 ,
        },
        {
            key: '2',
            criteria: 'Participation/Contribution',
            ratings: 'Always participated in discussions, contributed to the success of the project.',
            comments: '',
            points: 0,
        },
        {
            key: '3',
            criteria: 'Quality of Work',
            ratings: 'Work is always correct, complete, and contributes to the success of the project.',
            comments: '',
            points: 0,
        },
        {
            key: '4',
            criteria: 'Reliability',
            ratings: 'Always responded to emails, texts, & calls quickly.Tasks are always completed and submitted on time.',
            comments: '',
            points: 0,
        },
        {
            key: '5',
            criteria: 'Team-like Attitude',
            ratings: 'Acted, spoke, and performed in the best interest of the team, demonstrated a high priority for the success of the project.',
            comments: '',
            points: 0,
        },
        {
            key: '6',
            criteria: 'Professionalism, Including with Client',
            ratings: 'On time to meetings, dressed professionally for meetings,spoke and acted respectfully to the team members and the client.',
            comments: '',
            points: 0,
        },
    ];

    return (
        <>
            <div className="evaluation-header">
                <Button type="primary" className="nav-button">Previous</Button>
                <h2 className="evaluation-title">STEFAN JOSEPH</h2>
                <Button type="primary" className="nav-button">Next</Button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                summary={() => (
                    <Table.Summary.Row headerBg="#E6F0F4">
                        <Table.Summary.Cell index={0}></Table.Summary.Cell>
                        <Table.Summary.Cell index={1}></Table.Summary.Cell>
                        <Table.Summary.Cell index={2}></Table.Summary.Cell>
                        <Table.Summary.Cell index={3} className="total-score">
                            Total: {getTotalScore()}
                        </Table.Summary.Cell>
                    </Table.Summary.Row>
                )}
            />
            <div className="table-footer-actions">
                <Button className="cancel-button">Cancel</Button>
                <Button className="save-button" type="primary">Save</Button>
            </div>
         </>
    );
};

export default EvaluationTable;
