package gw.sbt.loader.report.render.html

uses java.lang.StringBuilder

class HtmlResources {

  public property get Css(): String {
    var css = new StringBuilder()
    append(css,"<style type=\"text/css\">")
    append(css,"body {")
    append(css,"	font: normal 15px/21px \"Open Sans\", sans-serif;")
    append(css,"}")
    append(css,"table {")
    append(css,"  border-collapse: collapse;")
    append(css,"}")
    append(css,"table#header th {")
    append(css,"  text-align: right;")
    append(css,"}")
    append(css,"th, td {")
    append(css,"	padding: 2px 5px;")
    append(css,"	border: 1px solid #555;")
    append(css,"}")
    append(css,"th {")
    append(css,"  white-space: nowrap;")
    append(css,"	background-color: #ccc;")
    append(css,"}")
    append(css,"</style>")

    return css.toString()
  }
  private function append(sb: StringBuilder, content: String){
    sb.append(content+"\n")
  }
}