---
layout: page
permalink: /publications/
title: 研究与发表
description: 研究项目和学术论文展示，按时间倒序排列
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->



## Google Scholar

<p>
  <a href="https://scholar.google.com/citations?user=example_scholar_id" target="_blank" rel="noopener noreferrer">
    See the Google Scholar for the full list of my publications.
  </a>
</p>

## 研究项目

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

## 学术论文

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>
