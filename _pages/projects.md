---
layout: page
title: 研究项目
permalink: /projects/
description: 我的研究项目和学术成果展示
nav: false # 根据需求文档，项目页面合并到研究与发表页面
nav_order: 3
display_categories: [research, collaboration]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 {% unless project.full_width %}row-cols-md-3{% endunless %}">
    {% for project in sorted_projects %}
      {% if project.full_width %}
        <div class="col-12">
          {% include projects.liquid %}
        </div>
      {% else %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 {% unless project.full_width %}row-cols-md-3{% endunless %}">
    {% for project in sorted_projects %}
      {% if project.full_width %}
        <div class="col-12">
          {% include projects.liquid %}
        </div>
      {% else %}
        {% include projects.liquid %}
      {% endif %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
