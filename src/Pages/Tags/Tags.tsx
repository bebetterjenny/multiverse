import React, { useState, useCallback } from 'react';
import './Tags.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const Tags = () => {
  const [tags, setTags] = useState([
    '告诉至少3个人你爱他们',
    '去一次远足',
    '学习一门新语言',
    '在阳光明媚的日子里野餐',
    '去一次主题乐园',
    '参观一次著名的历史遗迹',
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  }, []);

  const handleNextClick = useCallback(() => {
    // navigate(`/select-metaverse?tags=${selectedTags.join(',')}`);
    navigate(`/select-metaverse`);
  }, [selectedTags]);
  

  return (
    <div className="tag-page" style={{}}>

      <div className="tag-page__content" style={{ padding: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>请选择您的想要完成的事情</h1>
        <p style={{ fontSize: '16px' }}>即将生成时空</p>
        <div className="tag-page__tags" style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <div
              key={tag}
              className="tag-page__tag"
              style={{
                backgroundColor: selectedTags.includes(tag) ? '#F2E3C9' : '#F2E3C9',
                borderRadius: '16px',
                border: `1px solid ${selectedTags.includes(tag) ? 'black' : '#CCC'}`,
                color: selectedTags.includes(tag) ? 'currentColor' : 'currentColor',
                fontWeight: 'bold',
                padding: '8px 16px',
                margin: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
              }}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
        <button
          className="tag-page__verify-button"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '50px',
            width: 'calc(100% - 48px)',
            height: '60px',
            borderRadius: '16px',
            boxShadow: '0 1px 0 #000000',
            border: '1px solid #1C1D1E',
            backgroundImage: 'linear-gradient(to bottom right, #F2E5D7, #F2E5D7)',
            backgroundColor: 'transparent',
            color: '#000000', // modified style
            fontSize: '16px',
            fontWeight: 'bold',
          }}
          onClick={handleNextClick}
        >
          下一步
        </button>
      </div>
    </div>
  );
};

export default Tags;