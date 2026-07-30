// src/__tests__/RepoCard.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RepoCard from '../components/dashboard/RepoCard';

const mockRepo = {
  name: 'test-repo',
  description: 'A test repository',
  stargazers_count: 42,
  forks_count: 7,
  language: 'JavaScript',
  html_url: 'https://github.com/user/test-repo',
};

describe('RepoCard', () => {
  it('renders repository name and description', () => {
    render(<RepoCard repo={mockRepo} />);
    expect(screen.getByText('test-repo')).toBeInTheDocument();
    expect(screen.getByText('A test repository')).toBeInTheDocument();
  });

  it('shows star and fork counts', () => {
    render(<RepoCard repo={mockRepo} />);
    
    // Use a function matcher to find the element containing "42"
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'span' && content.includes('42');
    })).toBeInTheDocument();
    
    expect(screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'span' && content.includes('7');
    })).toBeInTheDocument();
  });

  it('renders fallback text when description is missing', () => {
    const repoWithoutDesc = { ...mockRepo, description: '' };
    render(<RepoCard repo={repoWithoutDesc} />);
    expect(screen.getByText('No description')).toBeInTheDocument();
  });
});
