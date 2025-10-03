---
layout: page
permalink: /publications/
title: Research & Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

See the [Google Scholar](https://scholar.google.com/citations?hl=zh-CN&authuser=1&user=6DSyKpEAAAAJ) for the full list of my publications.

## Projects
<!-- 已隐藏 Undergraduate research projects -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 {% unless project.full_width %}row-cols-md-2{% endunless %}">
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
</div>

## Publications

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>
