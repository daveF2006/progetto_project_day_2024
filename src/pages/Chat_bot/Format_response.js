const formatMessage = (response) => {

  response = response.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  response = response.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  response = response.replace(/^\|(.+?)\|$/gm, '<tr><td>$1</td></tr>');
  response = response.replace(/^\|([^|]+)\|(\s*\|-+\|)+$/gm, '<thead><tr><th>$1</th></tr></thead><tbody>');
  response = response.replace(/<th>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g, (match, p1, p2) => `<th>${p1}</th><th>${p2}</th>`);
  response = response.replace(/<\/tbody>\s*(<thead>|<h3>)/g, '</tbody></table>$1');
  response = response.replace(/Tool, app e software utili:/g, '<h4>Tool, app e software utili:</h4>');
  response = response.replace(/^(\d+)\. (.*)$/gm, '<li>$2</li>');
  response = response.replace(/(<li>.*<\/li>)(?![\s\S]*<li>)/gm, '$1</ol>');
  response = response.replace(/(<li>)/g, '<ol>$1');
  response = response.replace(/^-{3,}$/gm, '<hr>');
  response = response.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  response = response.replace(/\*(.*?)\*/g, '<em>$1</em>');
  response = response.replace(/(?:\r\n|\r|\n)/g, '<br>');
  response = response.replace(/^(?!<\/?(h[234]|table|thead|tbody|tr|td|th|ol|li|hr|a|br)\b)(.+)$/gm, '<p>$2</p>');
  
  return response;

}

export default formatMessage;